import { h, render, Component, uniqueTag } from "http://wpa.flatweb.net/wpa/latest/wpa.js";
import "http://wpa.flatweb.net/wpa-ui/latest/wpa-ui.js";

const App = uniqueTag(
  class extends Component {
    static css = css;
    render = () => (
      <div>
        <wp-alert closeable theme-color="success">
          <span className="aaa"> alter 组件</span>
        </wp-alert>

        <wp-accordion
          first-open
          items={[
            {
              header: (
                <span>
                  <wp-icon name="home" /> HOME
                </span>
              ),
              body: (item, setting, accordion) => {
                if (!item.__body) {
                  setTimeout(() => {
                    item.__body = <h1>Function Callback</h1>;
                    accordion.update();
                  }, 10000);

                  return <wp-loading name="ball-fall" size=".5" />;
                } else {
                  return item.__body;
                }
              },
            },
            {
              header: "Accordion #1",
              body: "hello,body",
            },
            {
              header: "Accordion #2",
              body: "body 2",
            },
          ]}
        />

        <wp-carousel
          class="carousel-dark"
          style="width:20rem; outline:#aabbcc dotted thick;margin-top:1rem;"
          duration="1"
          items={
            <>
              <div>
                <img
                  src="https://tse1-mm.cn.bing.net/th/id/OIP-C.gAwrrAwnrp1bDE8Z-1ibmQHaJU?w=134&h=180&c=7&r=0&o=5&dpr=2.07&pid=1.7"
                  class="d-block w-100"
                  title="1"
                  alt="...1"
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
              <img
                src="https://tse1-mm.cn.bing.net/th/id/OIP-C.gAwrrAwnrp1bDE8Z-1ibmQHaJU?w=134&h=180&c=7&r=0&o=5&dpr=2.07&pid=1.7"
                class="d-block w-100"
                alt="...2"
                title="2"
              />
              <img
                src="https://tse1-mm.cn.bing.net/th/id/OIP-C.gAwrrAwnrp1bDE8Z-1ibmQHaJU?w=134&h=180&c=7&r=0&o=5&dpr=2.07&pid=1.7"
                class="d-block w-100"
                alt="...3"
                title="3"
              />
            </>
          }
        ></wp-carousel>
      </div>
    );
  }
);

render(<App />, "body");
