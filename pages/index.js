import stylesheet from 'styles/styles.css'

const Index = () => (
    <div>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <button class="btn btn-blue">Test</button>
        <p class="mt-6 text-xl">Hello Next.js</p>
    </div>
)

export default Index