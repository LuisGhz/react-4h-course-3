import { UserContext, ColorContext } from 'App';


const  ComponentC = () => {
  return (
    <div>
      <p>ComponentC</p>
      <UserContext.Consumer>
        { name => {
          return (
            <ColorContext.Consumer>
              { color => (
                <div>name: { name } color: { color }</div>
              )}
            </ColorContext.Consumer>
          )
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentC;