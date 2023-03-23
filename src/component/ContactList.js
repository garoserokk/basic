import React,{useEffect, useState} from 'react'
import Right from './Right'
import Contact from './Contact'
import { useSelector } from 'react-redux'


const ContactList = () => {
  let {Keyword,contactList} = useSelector((state) => state.rename);

  let [filteredList, setfilteredList] = useState([]);

  useEffect(() => {
    if (Keyword !== "") {
      let list = contactList.filter((item) => item.name.includes(Keyword));
      
      setfilteredList(list);

    } else {
      setfilteredList(contactList);
    }
  },[Keyword,contactList])
  return (
    <div>
      <Right />
      {filteredList.map((item, index) => (
        <Contact key={index}  item={item}/>
      ))}
    </div>
  )
}

export default ContactList
