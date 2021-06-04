import { useContext } from 'react';
import ComponentC from './ComponentC';
import { UserContext, ColorContext } from 'App';

const  ComponentB = () => {
  const user = useContext(UserContext);
  const color = useContext(ColorContext);

  return (
    <div>
      <p>ComponentB</p>
      <p>name: { user }, color { color }</p>
      <ComponentC />
    </div>
  );
}

export default ComponentB;