import "./arrows.css";
export default function Arrows() {
  return (
    <div style={{ position: "absolute", bottom: 50, right: 0, zIndex: 3 }}>
      <div class="keys">
        <div
          class="up arr"
          id="up"
          onMouseDown={() => {
            window.dispatchEvent(
              new KeyboardEvent("keydown", {
                key: "ArrowUp",
              })
            );
          }}
          onMouseUp={() => {
            window.dispatchEvent(
              new KeyboardEvent("keyup", {
                key: "ArrowUp",
              })
            );
          }}
        >
          <i class="fa fa-arrow-up"></i>
        </div>
        <br />
        <div
          class="left arr"
          id="left"
          onMouseDown={() => {
            window.dispatchEvent(
              new KeyboardEvent("keydown", {
                key: "ArrowLeft",
              })
            );
          }}
          onMouseUp={() => {
            window.dispatchEvent(
              new KeyboardEvent("keyup", {
                key: "ArrowLeft",
              })
            );
          }}
        >
          <i class="fa fa-arrow-left"></i>
        </div>
        <div
          class="down arr"
          id="down"
          onMouseDown={() => {
            window.dispatchEvent(
              new KeyboardEvent("keydown", {
                key: "ArrowDown",
              })
            );
          }}
          onMouseUp={() => {
            window.dispatchEvent(
              new KeyboardEvent("keyup", {
                key: "ArrowDown",
              })
            );
          }}
        >
          <i class="fa fa-arrow-down"></i>
        </div>
        <div
          class="right arr"
          id="right"
          onMouseDown={() => {
            window.dispatchEvent(
              new KeyboardEvent("keydown", {
                key: "ArrowRight",
              })
            );
          }}
          onMouseUp={() => {
            window.dispatchEvent(
              new KeyboardEvent("keyup", {
                key: "ArrowRight",
              })
            );
          }}
        >
          <i class="fa fa-arrow-right"></i>
        </div>
      </div>
    </div>
  );
}
