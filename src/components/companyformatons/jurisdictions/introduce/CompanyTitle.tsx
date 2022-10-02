import Introduce from "./Introduce";

type ICompanyTitle = {
    title: string;
    img?: string;
  };
  
  const CompanyTitle = (props: ICompanyTitle) => (
    <div
      className="bg-companytitle "
      style={{ backgroundImage: `url(${props.img}
        )` }}
    >
      <div className="container mx-auto">
        <div className="py-32 px-24">
          <Introduce title={props.title} />
        </div>
      </div>
    </div>
  );
  
  export { CompanyTitle };