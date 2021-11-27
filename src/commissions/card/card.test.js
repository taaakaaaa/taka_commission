import CommissionCard from "./card";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { configure, shallow } from "enzyme";

configure({ adapter: new Adapter() });

const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("Commission Card", () => {
  let titulo = "teste";
  let descricao = "teste desc";
  let preco = "100";

  //
  let artUrl = "https://placewaifu.com/image/200/200";
  let art = [{ url: artUrl }];

  test("card information", () => {
    useRouter.mockImplementationOnce(() => ({
      push: () => {},
    }));

    const component = shallow(
      <CommissionCard
        titulo={titulo}
        descricao={descricao}
        art={art}
        preco={preco}
        id="1"
      />
    );

    expect(component.find("#title").text()).toEqual(titulo);
    expect(component.find("p").text()).toEqual(descricao);
    expect(component.find("h4").text()).toEqual(preco);
    expect(component.find("img").prop("src")).toEqual(artUrl);
  });
});
