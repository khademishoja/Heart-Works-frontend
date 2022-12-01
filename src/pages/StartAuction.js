const StartAuction = () => {
  return (
    <div>
      <h1>Start an auction</h1>
      <div>
        title <input type="text" placeholder="name of your artwork"></input>
      </div>
      <div>
        minimum bid <input type="number"></input>
      </div>
      <div>
        imageurl<input type="text" placeholder="http://"></input>
      </div>
      <div>{/* <img src="" /> */}</div>
      <div>
        <button>Star auction</button>
      </div>
    </div>
  );
};
export default StartAuction;
