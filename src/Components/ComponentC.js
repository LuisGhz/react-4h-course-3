import { NameContext } from 'App';


const  ComponentC = () => {
  return (
    <div>
      <p>ComponentC</p>
      <NameContext.Consumer>
        { name => {
          return <p>{ name }</p>
        }}
      </NameContext.Consumer>
    </div>
  );
}

export default ComponentC;