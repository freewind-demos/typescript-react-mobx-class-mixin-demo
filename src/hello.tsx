import {observer} from 'mobx-react';
import React from 'react'
import {Counter} from './modal';

type Props = {
  counter: Counter
}

function Hello({counter}: Props) {
  return <div>
    <button onClick={() => counter.increase()}>+1</button>
    <div>Count: {counter.count1}, {counter.count2}</div>
    <div>Double: {counter.doubleCount1}, {counter.doubleCount2}</div>
  </div>
}

export default observer(Hello)
