import React from 'react';
import classes from './Counter.module.css';
import { counterActions } from '../store/counterStore';

import { useSelector, useDispatch } from 'react-redux';

const CounterFunc = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const onIncrement = () => {
    dispatch(counterActions.increment());
  }

  const onAdd = () => {
    dispatch(counterActions.add(5));
  }

  const onDecrement = () => {
    dispatch(counterActions.decrement());
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={onIncrement}>Increment</button>        
        <button onClick={onAdd}>Add 5</button>
        <button onClick={onDecrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default CounterFunc;

/*
import { connect } from 'react-redux';

class CounterClass extends React.Component {
  constructor() {
    super();
    
    this.onAdd = this.onAdd.bind(this);
    this.onToggle = this.onToggle.bind(this);
    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
  }

  onIncrement() {
    this.props.increment();
  }

  onDecrement() {
    this.props.decrement();
  }

  onAdd() {
    this.props.add(5);
  }

  onToggle() {
    this.props.toggle();
  }

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        {this.props.showCounter && <div className={classes.value}>{this.props.counter}</div>}
        <div>
          <button onClick={this.onIncrement}>Increment</button>
          <button onClick={this.onAdd}>Add 5</button>
          <button onClick={this.onDecrement}>Decrement</button>
        </div>
        <button onClick={this.onToggle}>Toggle Counter</button>
      </main>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter.counter,
  showCounter: state.counter.showCounter
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(counterActions.increment()),
  decrement: () => dispatch(counterActions.decrement()),
  toggle: () => dispatch(counterActions.toggle()),
  add: (value) => dispatch(counterActions.add(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterClass);
*/