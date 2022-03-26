import { bind } from "@react-rxjs/core";
import { createSignal } from "@react-rxjs/utils";

// A signal is an entry point to react-rxjs. It's equivalent to using a subject
const [textChange$, setText] = createSignal<string>();

const [useText, text$] = bind(textChange$, "");

function TextInput<NextPage>() {
  const text = useText();

  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      Echo: {text}
    </div>
  );
}

export default TextInput();
