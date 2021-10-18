import logo from "./logo.svg";
import styles from "./App.module.css"
import Card from "./Components/Card"

function App() {
  const data = {
    text: <h1>Product Name</h1>,
    text1: <div>Product <br /> Price Qty:</div>
  }
  const data1 = {
    text: <h1>Product Name</h1>,
    text1: <div>Product <br /> Price Qty:</div>
  }
  const data2 = {
    text: <h1>Product Name</h1>,
    text1: <div>Product <br /> Price Qty:</div>
  }
  const data3 = {
    text: <h1>Product Name</h1>,
    text1: <div>Product <br /> Price Qty:</div>
  }
  return (
    <div className={styles.App}>
      <div className={styles.data}><Card props={data} /></div>
       <div className={styles.data1}><Card props={data1} /></div>
      <div className={styles.data2}><Card props={data2} /></div>
       <div className={styles.data3}><Card props={data3} /></div>
    </div>
  );
}

export default App;
