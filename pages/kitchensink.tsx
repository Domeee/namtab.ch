export default function Kitchensink() {
  return (
    <div className="max-w-md mx-auto px-5 pt-10 space-y-5">
      <div>
        <Title label="<h1>" />
        <h1>Heading 1</h1>
      </div>
      <div>
        <Title label="<h2>" />
        <h2>Heading 2</h2>
      </div>
      <div>
        <Title label="<h3>" />
        <h3>Heading 3</h3>
      </div>
      <div>
        <Title label="<h4>" />
        <h4>Heading 4</h4>
      </div>
      <div>
        <Title label="<h5>" />
        <h5>Heading 5</h5>
      </div>
      <div>
        <Title label="<h6>" />
        <h6>Heading 6</h6>
      </div>
      <div>
        <Title label="<p>" />
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div className="prose">
        <div>
          <Title label="prose <h1>" />
          <h1>Heading 1</h1>
        </div>
        <div>
          <Title label="prose <h2>" />
          <h2>Heading 2</h2>
        </div>
        <div>
          <Title label="prose <h3>" />
          <h3>Heading 3</h3>
        </div>
        <div>
          <Title label="prose <h4>" />
          <h4>Heading 4</h4>
        </div>
        <div>
          <Title label="prose <h5>" />
          <h5>Heading 5</h5>
        </div>
        <div>
          <Title label="prose <h6>" />
          <h6>Heading 6</h6>
        </div>
        <div>
          <Title label="prose <p>" />
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </div>
  );
}

const Title = ({ label }: any) => {
  return (
    <div className="text-xs text-gray-300">
      <span>{label}</span>
    </div>
  );
};
