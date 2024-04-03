interface SectionProps {
  children: React.ReactNode;
}

function Section({ children }: SectionProps) {
  return <section className="flex flex-col">{children}</section>;
}

export function SectionMain() {
  return (
    <Section>
      <div className="w-full max-h-screen sm:bg-[url(/image/iklan/bg-large-device.jpg)] bg-[url(/image/iklan/bg-phone.jpg)] bg-cover bg-no-repeat">
        <div className="flex sm:flex-row flex-col-reverse justify-center items-center h-screen">
          <div className="flex flex-col sm:w-1/2 w-full">
            <p className="text-white sm:text-6xl text-4xl font-bold p-5">
              Ingin Video Iklan dan Konten Unik dan Menarik banyak Penonton?
            </p>
            <div className="flex flex-col">
              <p className="text-white text-lg font-bold mx-auto transition-all ease-in-out hover:mb-5 cursor-pointer">
                Scroll for more
              </p>
              <img src="/icons/arrow-down-white.svg" className="h-10" />
            </div>
          </div>
          <img
            src="/image/iklan/iklan_main.png"
            className="sm:h-[600px] h-72"
          />
        </div>
      </div>
    </Section>
  );
}

export function SectionSecond() {
  return (
    <Section>
      <div className="w-full h-full bg-[#00041f]">
        <div className="flex sm:flex-row flex-col justify-center">
          <img
            src="/image/iklan/iklan_second.png"
            className="sm:h-[600px] sm:w-[600px] w-72 h-72 mx-auto"
          />
          <div className="my-auto sm:w-1/2 w-full">
            <p className="text-white sm:text-4xl text-xl font-semibold p-10">
              Tim kami dapat memberikan solusi untuk anda yang ingin membuat
              video iklan/konten sesuai keinginan anda.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
