import React from 'react'

function Achievement() {

  const achievementList = [
    {link: "https://drive.google.com/uc?export=view&id=1KrNGaTic2Utbz8k_zdkUi-QZ-F71kVZq"},
    {link: "https://drive.google.com/uc?export=view&id=1L9f_qvie8uykfGI8H70no3BvAtKkHqJj"},
    {link: "https://drive.google.com/uc?export=view&id=1KfgYrhBZv2Tu11kaHmMFODvVjfQwvBaF"},
    {link: "https://drive.google.com/uc?export=view&id=1Ks7DpWrNdRDUrGw1Ev8VwGD3WjCItMJP"},
    {link: "https://drive.google.com/uc?export=view&id=1LD7zXO7kmQgJVJ5rqKcyDvgk6IydX98h"},
    {link: "https://drive.google.com/uc?export=view&id=1LHJ_wMcl58hkQBHrLHW6XS3ngiyvdAj1"},
  ]

  return (
    <div style={{ backgroundImage: 'radial-gradient(#A4907C, #C7E8CA)', height: '100vh' }}>

      <div className='container'>
        <div className='cards'>
          {achievementList.length === 0 ? <h4 className='text-danger align-text'>No data available...</h4> :
            achievementList.map((item, i) => (
              <div key={i} className='card mt-2'>
                <img src={item.link}/>
              </div>
            ))}
        </div>
      </div>

    </div>
  )
}

export default Achievement