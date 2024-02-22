import { CardSub, Container } from '@/components'
import useTitle from '@/hooks/useTitle'
import * as React from 'react'
import { useTitleHeader } from '@/store/client'

const DataPenerimaRehabsos = () => {
  useTitle('Data Penerima')
  const setBreadcrumbs = useTitleHeader((state) => state.setBreadcrumbs)
  React.useEffect(() => {
    setBreadcrumbs([
      { url: '/data-penerima', label: 'Data Penerima' },
      { url: '/data-penerima/rehabsos', label: 'Rehabsos' }
    ])
  }, [])

  return (
    <Container className="px-10 pt-10">
      <h1 className="font-bold text-2xl ">REHABSOS</h1>
      <p className="text-sm text-[#8F8F8F]">Rehabilitasi Sosial</p>
      <div className="grid grid-cols-2 gap-x-10 gap-y-10 mt-10">
        <CardSub title={'Anak-anak'}subTitle={''} href={'/data-penerima/rehabsos/anak'} />
        <CardSub title={'Korban Perdagangan Orang'} subTitle={''} href={'/data-penerima/rehabsos/kpo'} />
        <CardSub title={'Disabilitas'} subTitle={''} href={'/data-penerima/rehabsos/disab'} />
        <CardSub title={'Bansos Permakanan Lansia'} subTitle={''} href={'/layanan/rehabsos'} />
        <CardSub title={'Bansos Permakanan Disabilitas'} subTitle={''} href={'/layanan/rehabsos'} />
        <CardSub title={'Tanda Daftar/Izin Operasional LKS'} subTitle={''} href={'/layanan/rehabsos'} />
        <CardSub title={'Pemerlu Pelayanan Kesejahteraan Sosial'} subTitle={''} href={'/layanan/rehabsos'} />
      </div>
    </Container>
  )
}
export default DataPenerimaRehabsos