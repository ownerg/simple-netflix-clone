import React, { useState, useContext, useMemo, createContext } from 'react';
import ReactDOM from 'react-dom';
import { Container, Button, Overlay, Inner } from './styles/player';

export const PlayerContext = createContext();

export default function Player({ children, ...restProps }) {
  const [showPlayer, setShowPlayer] = useState(false);
  const contextValue = useMemo(() => ({ showPlayer, setShowPlayer }), [showPlayer]);

  return (
    <PlayerContext.Provider value={contextValue}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
}

Player.Video = function PlayerVideo({ src, ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay onClick={() => setShowPlayer(false)} {...restProps}>
          <Inner>
            <video id="netflix-player" controls>
              <source src={src} type="video/mp4" />
            </video>
          </Inner>
        </Overlay>,
        document.body
      )
    : null;
};

Player.Button = function PlayerButton({ ...restProps }) {
  const { setShowPlayer } = useContext(PlayerContext);

  return (
    <Button onClick={() => setShowPlayer((prevShowPlayer) => !prevShowPlayer)} {...restProps}>
      Play
    </Button>
  );
};
