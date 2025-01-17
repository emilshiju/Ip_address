"use client"
export default function Home() {

  const clicked=async()=>{

    try {
      const res = await fetch('/api');
      if (res.ok) {
        const data = await res.json();
       
      } 
    } catch (error) {
      console.error('Error:', error);
     
    }


  }

  return (
    <div>
      <button onClick={clicked}>Click ME</button>
    </div>
  );
}
