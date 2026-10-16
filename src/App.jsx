import { useEffect, useMemo, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { ArrowDown, ArrowRight, Check, Code2, Github, Linkedin, Menu, Plus, Sparkles, Star, X, Zap } from 'lucide-react'

const categories = ['All', 'Frontend', 'Backend', 'Database', 'Language', 'Styling', 'DevOps', 'Tools']

function Logo() {
  return <a className="brand" href="#home" aria-label="Dev Stack home"><span className="brand-mark"><Code2 size={21} /></span><span>Dev <b>Stack</b></span></a>
}

function App() {
  const [technologies, setTechnologies] = useState([])
  const [stack, setStack] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    let active = true
    fetch('/data/technologies.json')
      .then((response) => {
        if (!response.ok) throw new Error('Could not load technology data')
        return response.json()
      })
      .then((data) => { if (active) setTechnologies(data) })
      .catch(() => toast.error('Technology data could not be loaded. Please refresh the page.'))
      .finally(() => { if (active) setLoading(false) })
    return () => { active = false }
  }, [])

  const filteredTechnologies = useMemo(() => technologies.filter((tech) => {
    const matchesCategory = activeCategory === 'All' || tech.category === activeCategory
    const matchesSearch = `${tech.name} ${tech.description} ${tech.category}`.toLowerCase().includes(search.toLowerCase())
    return matchesCategory && matchesSearch
  }), [technologies, activeCategory, search])

  function addToStack(technology) {
    if (stack.some((item) => item.id === technology.id)) {
      toast.warning(`${technology.name} is already in your stack.`)
      return
    }
    setStack((current) => [...current, technology])
    toast.success(`${technology.name} added to your stack!`)
  }

  function removeFromStack(technology) {
    setStack((current) => current.filter((item) => item.id !== technology.id))
    toast.info(`${technology.name} removed from your stack.`)
  }

  function clearStack() {
    if (stack.length === 0) return
    setStack([])
    toast.success('Your stack has been cleared.')
  }

  const selectedIds = new Set(stack.map((item) => item.id))

  return <>
    <ToastContainer position="top-right" autoClose={2500} theme="dark" newestOnTop />
    <header className="navbar">
      <div className="nav-inner">
        <button className="mobile-menu icon-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
        <Logo />
        <nav className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a><a href="#technologies" onClick={() => setMenuOpen(false)}>Technologies</a><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <div className="nav-actions"><a className="sign-in" href="#contact">Sign In</a><a className="button button-gradient button-small" href="#technologies">Sign Up <ArrowRight size={15}/></a></div>
      </div>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot"/> YOUR WORKFLOW, YOUR WAY</div>
          <h1>Build your perfect<br/> developer <span className="gradient-text">stack.</span></h1>
          <p className="hero-description">Discover the tools behind great products. Pick your technologies, shape your workflow, and build a stack that works for you.</p>
          <div className="hero-actions"><a className="button button-gradient" href="#technologies">Explore Technologies <ArrowRight size={17}/></a><a className="button button-outline" href="#about">Learn More <ArrowDown size={16}/></a></div>
          <div className="hero-proof"><div className="avatar-stack"><span>JS</span><span>⚛</span><span>⌘</span><span>+</span></div><p><strong>12 hand-picked tools</strong><br/><small>One stack. Endless possibilities.</small></p></div>
        </div>
        <div className="hero-art" aria-label="Illustration of a developer stack">
          <div className="art-glow"/><div className="orbit orbit-one"/><div className="orbit orbit-two"/>
          <div className="code-window"><div className="window-top"><span/><span/><span/><small>stack.config.js</small></div><div className="code-lines"><p><i>01</i> <span className="code-purple">const</span> stack = {'{'}</p><p><i>02</i> &nbsp; frontend: <b>'React'</b>,</p><p><i>03</i> &nbsp; backend: <b>'Node.js'</b>,</p><p><i>04</i> &nbsp; database: <b>'PostgreSQL'</b>,</p><p><i>05</i> &nbsp; deploy: <b>'Docker'</b></p><p><i>06</i> {'}'}</p><p><i>07</i> <span className="code-green">// ready to build ✨</span></p></div><div className="window-status"><span><span className="status-dot"/> All systems ready</span><span>JS&nbsp; ES6+</span></div></div>
          <div className="float-card float-react"><span className="float-icon react-icon">⚛</span><span><b>React</b><small>Frontend</small></span><span className="float-check"><Check size={13}/></span></div>
          <div className="float-card float-node"><span className="float-icon node-icon">JS</span><span><b>Node.js</b><small>Backend</small></span></div>
          <div className="float-card float-db"><span className="float-icon db-icon">◈</span><span><b>Database</b><small>PostgreSQL</small></span></div>
          <div className="sparkle sparkle-one">✳</div><div className="sparkle sparkle-two">✦</div>
        </div>
      </section>

      <section className="stats-strip section-wrap" id="about"><div><span className="stat-icon"><Code2 size={19}/></span><p><b>12</b><small>Developer tools</small></p></div><div><span className="stat-icon"><Zap size={19}/></span><p><b>8</b><small>Categories</small></p></div><div><span className="stat-icon"><Sparkles size={19}/></span><p><b>Your way</b><small>Personalized stack</small></p></div><p className="stats-note">Less searching, more building. <span>✦</span></p></section>

      <section className="builder section-wrap" id="technologies">
        <div className="section-heading"><div><div className="eyebrow">THE TOOLKIT</div><h2>Find your <span className="gradient-text">building blocks.</span></h2><p>Explore trusted technologies and choose the ones that fit your next big idea.</p></div><div className="tool-count"><span className="count-dot"/> {technologies.length || '—'} technologies</div></div>
        <div className="builder-layout">
          <div className="catalog">
            <div className="catalog-toolbar"><div className="category-list">{categories.map((category) => <button key={category} className={`category-filter ${activeCategory === category ? 'active' : ''}`} onClick={() => setActiveCategory(category)}>{category}</button>)}</div><label className="search-box"><span>⌕</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search tools..." aria-label="Search technologies"/><kbd>/</kbd></label></div>
            {loading ? <div className="loading-state"><span className="spinner"/><h3>Loading your toolkit...</h3><p>Finding the right tools for your workflow.</p></div> : filteredTechnologies.length === 0 ? <div className="loading-state"><h3>No technologies found</h3><p>Try another search or category.</p></div> : <div className="tech-grid">{filteredTechnologies.map((tech) => {
              const added = selectedIds.has(tech.id)
              return <article className={`tech-card ${added ? 'tech-card-added' : ''}`} key={tech.id}>
                <div className="card-top"><div className="tech-icon-wrap"><img src={tech.icon} alt={`${tech.name} logo`} loading="lazy" onError={(event) => { event.currentTarget.style.display = 'none'; event.currentTarget.nextElementSibling.style.display = 'grid' }}/><span className="icon-fallback">{tech.name.slice(0, 2)}</span></div><span className="badge">{tech.badge}</span></div>
                <div className="tech-title-row"><h3>{tech.name}</h3><span className="rating"><Star size={13} fill="currentColor"/> {tech.rating.toFixed(1)}</span></div>
                <p className="tech-description">{tech.description}</p>
                <div className="card-meta"><span className="category-chip">{tech.category}</span><span className={`difficulty difficulty-${tech.difficulty.toLowerCase().replaceAll('-', '')}`}>{tech.difficulty}</span></div>
                <button className={`add-button ${added ? 'added' : ''}`} disabled={added} onClick={() => addToStack(tech)}>{added ? <><Check size={15}/> Added to Stack</> : <><Plus size={15}/> Add to Stack</>}</button>
              </article>
            })}</div>}
          </div>
          <aside className="stack-panel">
            <div className="stack-panel-head"><div className="stack-heading-icon"><Code2 size={19}/></div><div><h3>Your Stack</h3><p>{stack.length} {stack.length === 1 ? 'technology' : 'technologies'} selected</p></div><span className="stack-number">{String(stack.length).padStart(2, '0')}</span></div>
            <div className="stack-progress"><span style={{ width: `${Math.min(stack.length / 8 * 100, 100)}%` }}/></div>
            {stack.length === 0 ? <div className="stack-empty"><div className="empty-illustration"><Code2 size={30}/><span>+</span></div><h4>Your stack starts here</h4><p>Add technologies from the collection to create your personalized developer toolkit.</p><span className="empty-hint"><ArrowRight size={13}/> Choose a technology to begin</span></div> : <div className="stack-items">{stack.map((tech, index) => <div className="stack-item" key={tech.id}><span className="stack-index">{String(index + 1).padStart(2, '0')}</span><img src={tech.icon} alt="" onError={(event) => { event.currentTarget.style.visibility = 'hidden' }}/><div className="stack-item-copy"><b>{tech.name}</b><small>{tech.category}</small></div><button className="remove-item" aria-label={`Remove ${tech.name}`} onClick={() => removeFromStack(tech)}><X size={15}/></button></div>)}</div>}
            <div className="stack-footer"><div className="stack-tip"><Sparkles size={15}/><p><b>Pro tip</b><br/>A balanced stack makes building easier. Mix frontend, backend, and database tools.</p></div><button className="clear-stack" onClick={clearStack} disabled={stack.length === 0}>Remove All <X size={14}/></button></div>
          </aside>
        </div>
      </section>

      <section className="cta section-wrap" id="projects"><div className="cta-icon"><Sparkles size={23}/></div><div><p className="eyebrow">READY WHEN YOU ARE</p><h2>Your next project starts with <span className="gradient-text">the right stack.</span></h2><p>Choose your tools, trust your process, and turn that idea into something real.</p></div><a className="button button-gradient" href="#technologies">Build My Stack <ArrowRight size={16}/></a></section>
    </main>

    <footer className="footer" id="contact"><div className="footer-main section-wrap"><div className="footer-brand-col"><Logo/><p>A thoughtful toolkit for curious developers. Find your tools, build your stack, and make something worth sharing.</p><div className="social-links"><a href="https://github.com" aria-label="GitHub" target="_blank" rel="noreferrer"><Github size={17}/></a><a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noreferrer"><X size={17}/></a><a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin size={17}/></a></div></div><div className="footer-links"><h4>Product</h4><a href="#technologies">Technologies</a><a href="#projects">Stack Builder</a><a href="#about">How it works</a></div><div className="footer-links"><h4>Company</h4><a href="#about">About us</a><a href="#contact">Contact</a><a href="https://github.com" target="_blank" rel="noreferrer">GitHub project</a></div><div className="footer-links"><h4>Legal</h4><a href="#contact">Privacy policy</a><a href="#contact">Terms of use</a><a href="#contact">Cookie policy</a></div></div><div className="footer-bottom section-wrap"><span>© 2026 Dev Stack. Made for people who build.</span><div><a href="#contact">Privacy</a><a href="#contact">Terms</a><span className="footer-made">Made with <span>♥</span> and React</span></div></div></footer>
  </>
}

export default App
