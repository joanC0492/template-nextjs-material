import { MainLayout } from "@/shared/components/Layouts/MainLayout";
import { HomeBancaMovil, HomeCarrousel } from "@/shared/components/pages/Home";

export default function Home() {  
  return (
    <MainLayout>
      <HomeCarrousel />
      <HomeBancaMovil />
    </MainLayout>
  );
}
