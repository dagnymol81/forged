function Home() {
    return ( 
      <div className="container my-3">
        <h1>Forged in the Dark: Rogue's Gallery</h1>
        <div class="card bg-dark p-3 m-3">
          <blockquote class="blockquote">
            You're in a haunted Victorian-era city trapped inside a wall of lightning powered by demon blood.
          </blockquote>
          <footer class="blockquote-footer"><cite title="Blades in the Dark Rulebook">Blades in the Dark</cite></footer>
        </div>
        <p>
          The Forged in the Dark Rogue's Gallery is a tool to create and save characters for <a href="https://evilhat.com/product/blades-in-the-dark/">Blades in the Dark</a> or other <a href="https://bladesinthedark.com/forged-dark">Forged in the Dark</a> games.
        </p><p>
          The Rogue's Gallery aims to provide a single application that can be used either in-person or online without being attached to any specific VTT.
        </p><p>
          For more information about characters and the Forged in the Dark system, I'd suggest checking out the <a href="https://bladesinthedark.com/">SRD</a> or watch this review for a brief introduction:
        </p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/mVDEwJ9xO20" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h2 className="my-3">Getting Started</h2>
        <p>
          To start creating your character, just <a href="/register">register here</a>. It's free, and we promise not to spam you or sell your information!  
        </p>
      </div>

     );
}

export default Home;