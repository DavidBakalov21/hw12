import Button from './components/button';
import './App.css';
import Week from './components/week';
import DayDetailList from './components/DayDatailList';
import Input from './components/input';

function App() {
  return (
    <div className="App">
      <h1>Week Planner</h1>
      <div className="row">
      <div className="el">
     

      <Week WeekNum={12} Daylist={['Monday', 'Tuesday', 'Wednesday', "Day4", "5", "6", "7"]}></Week>
      </div>
<div className="el">
<h1>Day in details</h1>
<DayDetailList Detaillist={["Do that", "Do next"]}></DayDetailList>
</div>
    </div>
    
    <Button>Add Task</Button>
    <Input type={"number"}></Input>
    <Input type={"text"}></Input>
    <Input type={"date"}></Input>
    </div>
  );
}

export default App;
