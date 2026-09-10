export default function Hero({ blok }) {
  return (
    <section className='relative flex flex-col justify-center bg-foreground text-white p-5 mb-6 rounded-lg shadow-lg min-h-80 overflow-hidden'>
      <div className='flex flex-col gap-2'>
        <h1 className='font-mono text-5xl font-black'>{blok.title}</h1>
        <p className='max-w-md'>{blok.description}</p>
      </div>
      <span className='radial-gradient absolute h-150 w-150 top-0 right-0'></span>
    </section>
  );
}
