import GitHubCalendar from 'react-github-calendar'
import { ErrorBoundary } from 'react-error-boundary';
import { errorRenderer } from './Error.tsx';
import './App.css'

function App() {
  const username = 'dora56'
  return (
    <>
    <div>
      <main className='container'>
        <section>
          <h4 style={{ fontWeight: 'normal', margin: '1em 0', color: '#fff' }}>
            <a
              href={`https://github.com/${username}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              @{username}
            </a>{' '}
            on GitHub
          </h4>
          <ErrorBoundary FallbackComponent={errorRenderer}>
            <GitHubCalendar username={username} />
          </ErrorBoundary>
        </section>
      </main>
    </div>
      
    </>
  )
}

export default App
