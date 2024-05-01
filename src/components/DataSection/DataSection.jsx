import SectionTitle from '../SectionTitle'
import DataGrid from './DataGrid'

export default function DataSection() {
  return (
      <section className='py-2 md:py-5 px-5 md:px-10 lg:px-20 gap-5 w-full flex flex-col' id="data-section">
          <SectionTitle title="Open Deals" />
          <DataGrid />
    </section>
  )
} 