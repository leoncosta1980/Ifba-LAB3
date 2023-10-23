import LayoutSpliter from './components/LayoutSpliter';

function App() {
  return (
    <LayoutSpliter
  direction="horizontal"
  splitPercentage={20}
  backgroundColor1="#0000FF"
  backgroundColor2="#ADD8E6"
  textColor1="#000"
  textColor2="#333"
  children1={<div>Menu</div>}
  children2={<div>Área de leitura</div>}
/>
  );
}

export default App;

