import React, { useEffect, useState, useRef } from 'react';
import { Howl, Howler } from 'howler';
import './App.css';
import musicref from './music.mp3';

function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <span className="close" onClick={onClose}>&times;</span>
        <div className="modal-content">
          <p>Ooooo Hoooooo ❤️❤️, Thanks a lot Mis Bhagyshree. Wishing You a Happy Valetine day Dear ❤️</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [volume, setVolume] = useState(0.5); // Default volume
  const [sound, setSound] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // Set up Howler with initial volume
    Howler.volume(volume);

    // Clean up function
    return () => {
      // Stop the sound if it exists
      if (sound) {
        sound.stop();
      }
    };
  }, [volume, sound]);

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
  };

  const [x, setX] = useState(52);
  const [y, setY] = useState(55);
  const form = useRef();

  const body = document.querySelector("body");
  if (!body) {
    throw new ReferenceError("Body section not found.");
  }

  function createHeart() {
    const heart = document.createElement("i");
    heart.className = "fa-solid fa-heart";
    heart.style.left = (Math.random() * 100) + "vw";
    heart.style.animationDuration = (Math.random() * 3) + 2 + "s";
    body.appendChild(heart);
  }
  setInterval(createHeart, 1000);
  setInterval(function name(params) {
    var heartArr = document.querySelectorAll(".fa-heart")
    if (heartArr.length > 200) {
      heartArr[0].remove()
    }
  }, 100);

  const popUp = () => {
    alert("Please Don't Do This 🥺");
  }

  const clickedYes = () => {
    setModalOpen(true);

    // Create Howl instance and play music when "YES" is clicked
    const newSound = new Howl({
      src: [musicref],
      autoplay: true,
      loop: true,
      volume: volume,
    });
    setSound(newSound);
  }

  function mouseOver() {
    setX(Math.random() * 100);
    setY(Math.random() * 50);
  }

  const noStyle = {
    left: x + "%",
    top: y + "%",
    position: "absolute",
  };

  const yesStyle = {
    left: "40%",
    top: "55%",
    position: "absolute",
  }

  return (
    <>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <p className="pre-valentine">
        Dear Bhagyashree
        <br></br>
        Will you be my
      </p>
      <p className="valentine"><br></br>.....Valentine</p>
      <form ref={form}>
        <button
          style={yesStyle}
          type="button"
          onClick={clickedYes}
        >
          YES!
        </button>
      </form>
      <button
        onMouseOver={mouseOver}
        style={noStyle}
        onClick={popUp}
      >
        No
      </button>
    </>
  );
}

export default App;
