import "./sky.css";
export default function Sky() {
  return (
    <div class="main-container">
      <div class="sub-container">
        <div id="useArrows" className="bounce-in">
          <h5>
            Use Keyboard Arrows,Space and Enter to move.
            <i class="fa-solid fa-rocket"></i>
          </h5>
        </div>
        <div class="sky">
          <div class="stars"></div>
          <div class="stars2"></div>
          <div class="stars3"></div>
          <div class="comet"></div>
        </div>
      </div>
      
      <embed
        src="/audio.mp3"
        loop="true"
        autostart="true"
        width="2"
        height="0"
      />
      
    </div>
  );
}
