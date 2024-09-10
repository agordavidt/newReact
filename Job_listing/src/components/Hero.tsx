// defining an interface for props
interface HeroProps{
    title: string;
    subtitle: string;
}



function Hero({ title = "This is the title", subtitle="This is a subtitle"}: HeroProps)
{
    return (
      <section className="bg-secondary text-white py-5 py-md-5 mb-4">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">{ title }</h1>
          <p className="lead">{ subtitle }</p>
        </div>
      </section>
    );
}

export default Hero;