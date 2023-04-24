import { useState } from 'react'


function FAQ({question, answer}) {
    const [isToggled, setIsToggled] = useState(false)
  
    return (
        <div className="faq-div">
        <div className="faq-q-sec">
          <h2 className="faq-q">{question}</h2>
          <button
            onClick={() => {
              setIsToggled(!isToggled);
            }}
          >
            {isToggled ? "+" : "-"}
          </button>
        </div>
        <div>
          <h3 className={isToggled ? "faq-a-display" : "faq-a-hide"}>
            {answer}
          </h3>
        </div>
        </div>
    )
  
  }
  
  
export default  function FAQs() {
    let Faq = [
      {
        id: 1,
        q: "Is this a good product?",
        a: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo dignissimos, maxime enim pariatur cumque perferendis officiis? Molestias voluptatibus illum perferendis unde necessitatibus ex? Sequi incidunt itaque maiores reiciendis aut obcaecati possimus quas.",
      },
      {
        id: 2,
        q: "How much does it cost?",
        a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos accusantium voluptatum, fugiat corporis facilis odit! Laudantium velit nobis cupiditate.",
      },
      {
        id: 3,
        q: "When can I get it?",
        a: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure ad nostrum tempore ducimus doloremque dignissimos totam!",
      },
    ];
  
    let list = Faq.map((ele) => {
      return (
        <FAQ question={ele.q} answer={ele.a} key={ele.id}/>
      )
    })
   
    return (
      <div className="faq-table">
        {list}
      </div>
    );
  }