import { render, useRouter } from "test-utils";

import OrderPage from "@/pages/order/[id]";

describe("Order page", () => {
  it("should match the snapshot", () => {
    const order = {
      id: "605b6725fe7852386d91e2d1",
      charge: "pi_1IYZWNGwSvHwY0aODRsDcaMd",
      total: 18558,
      user: {
        id: "604f75f8358eafe06fe725f9",
      },
      items: [
        {
          id: "605b6725fe7852386d91e2cf",
          name: "Vero perferendis vel",
          description:
            "Est eos earum Harum sapiente consequatur est pariatur dolorem quae est. Asperiores ratione culpa inventore. Nihil itaque qui ab incidunt blanditiis nulla neque.\n\nSequi dolor nulla odio. Exercitationem et nemo neque. Incidunt sint quod aut dignissimos quis. Asperiores deserunt quo exercitationem ipsam incidunt explicabo ea voluptatum.\n\nEt accusamus nesciunt rerum totam quo cupiditate. Veritatis quae et corrupti. Vel quia voluptates fuga necessitatibus vel. Provident debitis rerum eaque. Et et qui nam.",
          price: 2455,
          quantity: 2,
          photo: {
            id: "604fd09fa229e6fa4a447975",
            altText: "Vero perferendis vel",
            image: {
              publicUrlTransformed:
                "https://res.cloudinary.com/cyclonedisco/image/upload/v1615843740/nextjs-ecommerce/604fd0cda229e6fa4a447976.jpg",
            },
          },
        },
      ],
    };
    const { container } = render(<OrderPage order={order.id} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
