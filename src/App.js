import React from "react";
import "./styles.css";

function Animal({ emoji, name, description }) {
  return (
    <>
      <h2>
        {emoji} {name}
      </h2>
      {description}<br></br>
      <Button>Adopt {name}!</Button>
    </>
  );
}

function Button({children}){
  return (
    <>
    <button type="button" className="button">{children}</button>
    </>
  );
}

export default function App() {
  return (
    <main>
      <h1>Animal Shelter</h1>
      <p>Please adopt our lovely pets!</p>
      <Animal emoji="🐕" name="Lucky" description={<p>Likes to play fetch</p>} />
      <Animal emoji="🐈" name="Mittens" description={<b>Likes to purr</b>} />
      <Animal emoji="🐢" name="Archibald" description={<i>Faster than he looks</i>} />
      <Animal emoji="🐣" name="Chick Norris" description={<span>Internationally famous</span>} />
    </main>
  );
}
