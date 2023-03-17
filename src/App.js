import Review from './components/Review';
function App() {
  return (
    <main>
      <section className="review">
        <div className="review_box">
          <h1 className="review_title">our reviews</h1>
          <div className="review_underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;
