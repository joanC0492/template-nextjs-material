export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="my-10 relative text-center">
          <hr />
        </div>
        <hr className="my-10" />
        <div className="pb-10 flex flex-wrap lg:flex-nowrap items-center lg:gap-x-12 gap-y-5 lg:gap-y-0">
          <div>
            <img src="./img/home/bcp-dark.svg" alt="" />
          </div>

          <div>
            <p className="text-bcp-gray-1/75 text-xs">
              © 2020 BCP | Todos los derechos reservados. Sede Central,
              Centenario 156, La Molina 15026, Lima, Perú.
            </p>
          </div>

          <div className="ml-auto">
            <ul className="flex gap-4 [&_img]:h-16 [&_img]:w-auto">
              <li>
                <img
                  src="https://www.viabcp.com/wcm/connect/7b939915-1554-4ce2-a2d6-79a24a35d1b9/image+2.svg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-7b939915-1554-4ce2-a2d6-79a24a35d1b9-osEM8OH"
                  alt="Icon 1"
                />
              </li>
              <li>
                <img
                  src="https://www.viabcp.com/wcm/connect/15201024-7e8d-46f8-8a4f-1576e707721f/compromiso.svg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-15201024-7e8d-46f8-8a4f-1576e707721f-osEM8OH"
                  alt="Icon 2"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
