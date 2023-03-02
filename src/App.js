import React from 'react';

function App() {
  const {words} = require('./data/id.json')
  const dataWords = words.map(el => el.targetWord)

  const [keyword, setKeyword] = React.useState('')
  const sugestionWords = dataWords.filter(el => el.toLowerCase().includes(keyword))

  const [result, setResult] = React.useState([])
  const [showResult, setShowResult] = React.useState(false)
  const handleSearch = () => {
    if (!keyword) {
      setResult([])
    } else {
      setResult(sugestionWords)
    }
    setShowResult(true)
    setKeyword(null)
  }

  return (
    <div className="bg-slate-50 min-h-screen relative">
      {/* input */}
      <div className="border py-3 flex justify-center bg-blue-600">
        <div className="form-control w-full max-w-lg">
          <div className="input-group">
            <input 
              onChange={(e) => setKeyword(e.target.value)}
              type="text" 
              placeholder="Search…" 
              className="input input-bordered w-full max-w-lg" />
            <button onClick={handleSearch} className="btn btn-square">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
          </div>
        </div>
      </div>

      {/* suggestion */}
      <div className="flex justify-center absolute w-full">
        <div className="border-2 bg-white rounded-lg w-full max-w-lg">
          {keyword && sugestionWords?.map((word, index) => {
            return (
              <div key={String(index)} className="px-4">
                <p>{word}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* result */}
      <div className="px-12 py-8">
        <p className='mb-3'>Result :</p>
        {showResult && result.map((word, index) => {
          return (
            <div key={String(index)} className="flex flex-col gap-2">
              <p>{word}</p>
            </div>
          )
        })}
        {showResult && !result.length && <p className='text-red-600'>No result.</p>}
      </div>

    </div>
  );
}

export default App;
