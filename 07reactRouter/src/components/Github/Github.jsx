import React, {useState, useEffect } from 'react'

const Github = () => {

  const [data, setData] = useState({})
   useEffect(() => {
      fetch('https://api.github.com/users/rohithalsana')
    .then((res) => res.json())
    .then((res) => setData(res))
    }, [])

  return (
   
     <div className="flex flex-wrap justify-center w-full bg-violet-900 text-white p-4 text-left">
      <h1 className="text-3xl text-pink-200 w-full mb-4">
        Github Following: {data.following}
      </h1>
      
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <h1 className="p-23 text-3xl max-w-xl">{data.bio}</h1>
        <img
          src={data.avatar_url}
          alt="Git profile"
          className="rounded-3xl w-40 sm:w-80"
        />
      </div>
        <h1 className='text-4xl'>
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum blanditiis quas, eligendi odit placeat vero in at deserunt quia iste id officiis tempora consequatur possimus laboriosam architecto nam animi? Odio porro provident repellat, amet dicta alias eos, dignissimos dolores, praesentium animi assumenda quos iusto aspernatur tempore ipsam repudiandae optio error doloremque? Suscipit, expedita sint? Quis, odit beatae illum reiciendis error repudiandae accusamus voluptatum accusantium rerum ducimus iure illo culpa natus laboriosam quia optio quo at tempora placeat aliquid eum aspernatur nulla labore? Dolor ex sint voluptatibus, nam dolore aspernatur impedit! 
         <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatum repellat magnam nulla officiis, quae modi delectus ducimus consequuntur deserunt neque, atque accusamus totam porro alias vitae eaque corporis inventore quisquam nesciunt similique. Nisi expedita, provident error, reprehenderit distinctio vitae sapiente eligendi quidem, voluptatum velit eius sit nam aspernatur fuga libero aperiam ducimus sunt minus repellendus ut. Delectus culpa facilis quidem corporis consequatur. Fuga cumque expedita rerum vel molestias molestiae corrupti deleniti optio obcaecati rem maxime veniam consequuntur quos aliquid, tempore et dignissimos officia exercitationem vitae quibusdam voluptatem harum ducimus.
        </h1>
    </div>

  );
};

export default Github

