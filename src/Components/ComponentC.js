import { NameContext, ColorContext } from 'App';


const  ComponentC = () => {
  return (
    <div>
      <p>ComponentC</p>
      <NameContext.Consumer>
        { name => {
          return (
            <ColorContext.Consumer>
              { color => (
                <div>name: { name } color: { color }</div>
              )}
            </ColorContext.Consumer>
          )
        }}
      </NameContext.Consumer>
    </div>
  );
}

export default ComponentC;