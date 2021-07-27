import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add_number, default_list } from '../redux/state_slices/counter/counterSlice';


export default function Counter() {
  const numbers_lists = useSelector((state) => state.counter.value.numbers)
  const dispatch = useDispatch()
  const number_li = numbers_lists.map((item, ind)=>{
      return(
          <p key={ind}>{item+" testing"}</p>
      )
  });
  useEffect(()=>{
    dispatch(default_list());
  }, [dispatch])

  return (
    <div>
        {console.log(numbers_lists)}
        {number_li}
      <div>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(add_number())}
        >
          Add
        </button>
      </div>
    </div>
  )
};