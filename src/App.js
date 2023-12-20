function App() {
  return (
    <div className="App">
      <section class="section has-background-link-light">
        <div class="container ">
          <div class="columns is-centered">
            <div class="column box has-background-white is-8 p-6">
              {/* start */}
              <div className="columns is-multiline is-mobile">
                <div className="column is-12">
                  <p>header</p>
                </div>
                <div className="column is-9">
                  <p>content</p>
                </div>
                <div className="column is-3">
                  <p>aside</p>
                </div>
              </div>
              {/* end */}
            </div>
          </div>
        </div>
      </section>
    </div >
  );
}

export default App;
