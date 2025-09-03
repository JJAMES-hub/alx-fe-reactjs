function MainContent() {
  return (
    <div>
      <main style={{ padding: '20px', backgroundColor: '#eef', minHeight: '60vh' }}>
        <h2 style={{ textAlign: 'center' }}>Welcome to My Favorite Cities Page</h2>
        <p style={{ textAlign: 'center' }}>Explore some cool cities and learn interesting facts about them!</p>
      </main>
    </div>
  );
}

export default MainContent;

/*<div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
   <h2 style={{ color: 'blue' }}>{props.name}</h2>
   <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
   <p>Bio: {props.bio}</p>
 </div>*/