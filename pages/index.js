import stylesheet from 'styles/styles.css'

const Index = () => (
    <div>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <p className="mt-6 text-xl">Hello Next.js</p>
    </div>
)

export default Index