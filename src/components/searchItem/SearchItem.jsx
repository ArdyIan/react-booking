import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=" alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartment</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free Airport taxi</span>
        <span className="siSubtitle">Studio Aprtment with air conditioning</span>
        <span className="siFeatures">Entire studio + 1 bathroom + 21m 1 full bed</span>
        <span className="siCancelOp">Free concellation</span>
        <span className="siCancelOpSubtitle">You can cancel later, so lock in this great proce today!</span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$123</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
