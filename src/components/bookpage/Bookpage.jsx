import React, { useContext, useEffect, useState } from 'react';
import './bookpage.css';
import { useParams } from 'react-router-dom';
import { DataContext } from '../UserContext';


const Bookpage = () => {

  const [data, setData] = useState([]);

  const { id } = useParams();
  const getData = useContext(DataContext);
  console.log(getData.data);


  useEffect(() => {


    const getBookData = () => {
      const book = getData.data.filter((item) => item.number === Number(id));
      setData(book);
      // console.log(book);
    }

    getBookData();

  }, [])



  return (
    <div className='bookpage'>
      <div className="bookpage-main">
        <h1>Book</h1>
        {
          data.length > 0 ? (
            data.map((item) => {
              return (
                <div className="item" key={item.number}>
                  <h2>{item.originalTitle}</h2>
                  <div className="bookdata">
                    <div className="img">
                      <img src={item.cover} alt="book Img" />
                      <span>Release Data: {item.releaseDate}</span>
                    </div>
                    <div className="description">
                      <p>{item.description} 
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, nam velit repellendus, neque fugiat dolore ut et voluptates autem delectus omnis ipsa totam ipsam blanditiis vero at architecto adipisci libero illum nemo. Soluta corporis accusantium qui suscipit excepturi dolores non magni, provident delectus quaerat porro quis rem ab veritatis. Perferendis amet quia porro modi totam inventore nobis iusto non nisi. 
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, nam velit repellendus, neque fugiat dolore ut et voluptates autem delectus omnis ipsa totam ipsam blanditiis vero at architecto adipisci libero illum nemo. Soluta corporis accusantium qui suscipit excepturi dolores non magni, provident delectus quaerat porro quis rem ab veritatis. Perferendis amet quia porro modi totam inventore nobis iusto non nisi. 
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, nam velit repellendus, neque fugiat dolore ut et voluptates autem delectus omnis ipsa totam ipsam blanditiis vero at architecto adipisci libero illum nemo. Soluta corporis accusantium qui suscipit excepturi dolores non magni, provident delectus quaerat porro quis rem ab veritatis. Perferendis amet quia porro modi totam inventore nobis iusto non nisi. 
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, nam velit repellendus, neque fugiat dolore ut et voluptates autem delectus omnis ipsa totam ipsam blanditiis vero at architecto adipisci libero illum nemo. Soluta corporis accusantium qui suscipit excepturi dolores non magni, provident delectus quaerat porro quis rem ab veritatis. Perferendis amet quia porro modi totam inventore nobis iusto non nisi. 
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, nam velit repellendus, neque fugiat dolore ut et voluptates autem delectus omnis ipsa totam ipsam blanditiis vero at architecto adipisci libero illum nemo. Soluta corporis accusantium qui suscipit excepturi dolores non magni, provident delectus quaerat porro quis rem ab veritatis. Perferendis amet quia porro modi totam inventore nobis iusto non nisi. 
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, nam velit repellendus, neque fugiat dolore ut et voluptates autem delectus omnis ipsa totam ipsam blanditiis vero at architecto adipisci libero illum nemo. Soluta corporis accusantium qui suscipit excepturi dolores non magni, provident delectus quaerat porro quis rem ab veritatis. Perferendis amet quia porro modi totam inventore nobis iusto non nisi.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, nam velit repellendus, neque fugiat dolore ut et voluptates autem delectus omnis ipsa totam ipsam blanditiis vero at architecto adipisci libero illum nemo. Soluta corporis accusantium qui suscipit excepturi dolores non magni, provident delectus quaerat porro quis rem ab veritatis. Perferendis amet quia porro modi totam inventore nobis iusto non nisi.</p>
                    </div>

                  </div>
                </div>
              )

            })
          ) :
            (
              <div>
                <p>Loading...</p>
              </div>
            )


        }
      </div>
    </div>
  )
}

export default Bookpage;