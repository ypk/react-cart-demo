import React from "react";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer className="container mx-auto bg-white py-8 border-t border-gray-400">
      <div className="container flex px-3 py-8 ">
        <div className="w-full mx-auto flex flex-wrap">
          <div className="flex w-full lg:w-1/2 ">
            <div className="px-3 md:px-0">
              <h3 className="font-bold text-gray-900">About</h3>
              <p className="py-4">
                This website is a mock store built for the sole purpose of testing
                the front-end development skills of <a className="hover:underline font-bold" href="http://www.github.com/ypk">@ypk</a>.
              </p>
              <p>&copy;&nbsp;{currentYear}. Everything is opensourced.</p>
            </div>
          </div>
          <div className="flex w-full lg:w-1/2 lg:justify-end lg:text-right">
            <div className="px-3 md:px-0">
              <h3 className="font-bold text-gray-900">Social</h3>
              <ul className="list-reset items-center pt-3">
                <li>
                  <a
                    className="inline-block no-underline hover:text-blue-400 hover:underline py-1 mx-2"
                    href="https://www.facebook.com/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current hover:text-blue-400 inline-block h-8 w-8"
                      viewBox="0 0 72 72"
                      version="1.1"
                    >
                      <g id="surface1">
                        <path d="M 10.546875 72 L 34.03125 72 L 34.03125 46.40625 L 25.59375 46.40625 L 25.59375 37.96875 L 34.03125 37.96875 L 34.03125 27.421875 C 34.03125 21.605469 38.761719 16.875 44.578125 16.875 L 55.125 16.875 L 55.125 25.3125 L 46.6875 25.3125 C 44.359375 25.3125 42.46875 27.203125 42.46875 29.53125 L 42.46875 37.96875 L 54.746094 37.96875 L 53.339844 46.40625 L 42.46875 46.40625 L 42.46875 72 L 61.453125 72 C 67.269531 72 72 67.269531 72 61.453125 L 72 10.546875 C 72 4.730469 67.269531 0 61.453125 0 L 10.546875 0 C 4.730469 0 0 4.730469 0 10.546875 L 0 61.453125 C 0 67.269531 4.730469 72 10.546875 72 Z M 4.21875 10.546875 C 4.21875 7.058594 7.058594 4.21875 10.546875 4.21875 L 61.453125 4.21875 C 64.941406 4.21875 67.78125 7.058594 67.78125 10.546875 L 67.78125 61.453125 C 67.78125 64.941406 64.941406 67.78125 61.453125 67.78125 L 46.6875 67.78125 L 46.6875 50.625 L 56.910156 50.625 L 59.722656 33.75 L 46.6875 33.75 L 46.6875 29.53125 L 59.34375 29.53125 L 59.34375 12.65625 L 44.578125 12.65625 C 36.4375 12.65625 29.8125 19.28125 29.8125 27.421875 L 29.8125 33.75 L 21.375 33.75 L 21.375 50.625 L 29.8125 50.625 L 29.8125 67.78125 L 10.546875 67.78125 C 7.058594 67.78125 4.21875 64.941406 4.21875 61.453125 Z M 4.21875 10.546875 " />
                      </g>
                    </svg>
                  </a>
                  <a
                    className="inline-block no-underline hover:text-blue-400 hover:underline py-1 mx-2"
                    href="https://www.twitter.com/"
                  >
                    <svg
                    className="fill-current hover:text-blue-400 inline-block h-8 w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 72 72"
                      version="1.1"
                    >
                      <g id="surface1">
                        <path d="M 72 14.480469 C 67.472656 14.6875 67.570312 14.671875 67.058594 14.714844 L 69.738281 7.054688 C 69.738281 7.054688 61.367188 10.132812 59.246094 10.683594 C 53.671875 5.675781 45.382812 5.453125 39.460938 9.09375 C 34.609375 12.078125 32.007812 17.199219 32.875 23.183594 C 23.433594 21.875 15.480469 17.398438 9.199219 9.855469 L 7.210938 7.46875 L 5.726562 10.195312 C 3.851562 13.636719 3.230469 17.574219 3.972656 21.28125 C 4.277344 22.800781 4.796875 24.253906 5.515625 25.609375 L 3.8125 24.949219 L 3.609375 27.796875 C 3.40625 30.691406 4.367188 34.066406 6.1875 36.828125 C 6.699219 37.605469 7.359375 38.460938 8.195312 39.300781 L 7.3125 39.167969 L 8.386719 42.429688 C 9.800781 46.714844 12.734375 50.03125 16.539062 51.875 C 12.738281 53.488281 9.667969 54.519531 4.617188 56.179688 L 0 57.699219 L 4.265625 60.03125 C 5.890625 60.917969 11.640625 63.890625 17.320312 64.78125 C 29.941406 66.761719 44.15625 65.148438 53.722656 56.53125 C 61.78125 49.273438 64.425781 38.949219 63.875 28.203125 C 63.792969 26.578125 64.238281 25.023438 65.132812 23.832031 C 66.917969 21.449219 71.988281 14.496094 72 14.480469 Z M 61.757812 21.308594 C 60.277344 23.285156 59.535156 25.8125 59.667969 28.417969 C 60.222656 39.257812 57.273438 47.660156 50.902344 53.398438 C 43.460938 60.101562 31.457031 62.730469 17.972656 60.617188 C 15.53125 60.234375 13.003906 59.375 10.917969 58.519531 C 15.148438 57.0625 18.417969 55.765625 23.695312 53.265625 L 31.0625 49.777344 L 22.929688 49.257812 C 19.03125 49.007812 15.789062 47.121094 13.792969 44.054688 C 14.851562 43.992188 15.871094 43.820312 16.890625 43.539062 L 24.648438 41.375 L 16.824219 39.460938 C 13.023438 38.53125 10.855469 36.253906 9.707031 34.511719 C 8.953125 33.363281 8.460938 32.1875 8.164062 31.105469 C 8.949219 31.316406 9.863281 31.46875 11.339844 31.613281 L 18.582031 32.328125 L 12.84375 27.855469 C 8.707031 24.628906 7.050781 19.785156 8.265625 15.128906 C 21.167969 28.511719 36.316406 27.503906 37.84375 27.859375 C 37.507812 24.597656 37.5 24.589844 37.410156 24.28125 C 35.457031 17.375 39.738281 13.871094 41.667969 12.683594 C 45.699219 10.207031 52.101562 9.832031 56.53125 13.914062 C 57.492188 14.796875 58.785156 15.144531 59.996094 14.84375 C 61.085938 14.574219 61.976562 14.285156 62.851562 13.976562 L 61.03125 19.171875 L 63.355469 19.171875 C 62.914062 19.757812 62.390625 20.464844 61.757812 21.308594 Z M 61.757812 21.308594 " />
                      </g>
                    </svg>
                  </a>
                  <a
                    className="inline-block no-underline hover:text-blue-400 hover:underline py-1 mx-2"
                    href="https://www.instagram.com/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current hover:text-blue-400 inline-block h-8 w-8"
                      viewBox="0 0 72 72"
                      version="1.1"
                    >
                      <g id="surface1">
                        <path d="M 10.546875 72 L 61.453125 72 C 67.269531 72 72 67.269531 72 61.453125 L 72 10.546875 C 72 4.730469 67.269531 0 61.453125 0 L 10.546875 0 C 4.730469 0 0 4.730469 0 10.546875 L 0 61.453125 C 0 67.269531 4.730469 72 10.546875 72 Z M 4.21875 10.546875 C 4.21875 7.058594 7.058594 4.21875 10.546875 4.21875 L 61.453125 4.21875 C 64.941406 4.21875 67.78125 7.058594 67.78125 10.546875 L 67.78125 61.453125 C 67.78125 64.941406 64.941406 67.78125 61.453125 67.78125 L 10.546875 67.78125 C 7.058594 67.78125 4.21875 64.941406 4.21875 61.453125 Z M 4.21875 10.546875 " />
                        <path d="M 36 54.984375 C 46.46875 54.984375 54.984375 46.46875 54.984375 36 C 54.984375 25.53125 46.46875 17.015625 36 17.015625 C 25.53125 17.015625 17.015625 25.53125 17.015625 36 C 17.015625 46.46875 25.53125 54.984375 36 54.984375 Z M 36 21.234375 C 44.140625 21.234375 50.765625 27.859375 50.765625 36 C 50.765625 44.140625 44.140625 50.765625 36 50.765625 C 27.859375 50.765625 21.234375 44.140625 21.234375 36 C 21.234375 27.859375 27.859375 21.234375 36 21.234375 Z M 36 21.234375 " />
                        <path d="M 57.09375 21.234375 C 60.582031 21.234375 63.421875 18.394531 63.421875 14.90625 C 63.421875 11.417969 60.582031 8.578125 57.09375 8.578125 C 53.605469 8.578125 50.765625 11.417969 50.765625 14.90625 C 50.765625 18.394531 53.605469 21.234375 57.09375 21.234375 Z M 57.09375 12.796875 C 58.257812 12.796875 59.203125 13.742188 59.203125 14.90625 C 59.203125 16.070312 58.257812 17.015625 57.09375 17.015625 C 55.929688 17.015625 54.984375 16.070312 54.984375 14.90625 C 54.984375 13.742188 55.929688 12.796875 57.09375 12.796875 Z M 57.09375 12.796875 " />
                      </g>
                    </svg>
                  </a>
                  <a
                    className="inline-block no-underline hover:text-blue-400 hover:underline py-1 mx-2"
                    href="https://www.pintrest.com/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current hover:text-blue-400 inline-block h-8 w-8"
                      viewBox="0 0 72 72"
                      version="1.1"
                    >
                      <g id="surface1">
                        <path d="M 14.066406 41.949219 L 16.507812 43.546875 L 17.429688 40.082031 C 19.066406 33.992188 18.890625 34.261719 19.054688 33.585938 C 18.988281 33.203125 17.269531 28.628906 18.464844 23.066406 L 18.488281 22.9375 C 20.128906 12.128906 38.222656 9.183594 46.621094 16.21875 C 50.246094 19.253906 51.609375 23.808594 50.566406 29.390625 C 49.816406 33.398438 48.503906 36.386719 46.445312 38.796875 C 43.597656 42.121094 40.019531 42.390625 37.898438 41.234375 C 37.109375 40.804688 35.359375 39.511719 36.171875 36.796875 C 37.328125 32.914062 39.425781 27.066406 39.671875 22.824219 C 39.894531 19.046875 37.613281 15.972656 34.003906 15.171875 C 29.976562 14.285156 25.335938 16.457031 23.332031 21.523438 C 21.886719 25.171875 21.890625 28.960938 23.34375 33.105469 C 23.390625 34.125 22.347656 37.980469 21.511719 41.089844 C 18.972656 50.496094 15.496094 63.371094 18.882812 69.929688 L 19.953125 72 L 21.90625 70.730469 C 27.488281 67.101562 30.75 56.542969 32.535156 49.964844 C 37.242188 53.449219 43.910156 53.742188 50.503906 50.523438 C 61.09375 45.351562 68.15625 33.015625 64.617188 19.277344 C 60.671875 3.964844 45.363281 -1.96875 29.945312 0.566406 C 17.238281 2.65625 9.15625 10.886719 7.007812 21.035156 C 5.199219 29.597656 8.035156 38 14.066406 41.949219 Z M 11.132812 21.90625 C 13.050781 12.84375 20.339844 6.417969 30.632812 4.726562 C 42.992188 2.695312 57.03125 6.730469 60.53125 20.328125 C 63.773438 32.902344 56.644531 42.832031 48.652344 46.734375 C 43.75 49.128906 37.089844 49.835938 33.089844 44.648438 L 30.484375 41.265625 L 29.382812 45.394531 C 27.929688 50.839844 25.582031 60.085938 21.808594 65.03125 C 21.066406 58.917969 23.824219 48.707031 25.582031 42.191406 C 27.261719 35.972656 27.917969 33.382812 27.355469 31.808594 C 26.222656 28.621094 26.1875 25.765625 27.25 23.078125 C 28.441406 20.066406 30.984375 18.824219 33.09375 19.289062 C 33.851562 19.460938 35.605469 20.117188 35.460938 22.578125 C 35.25 26.222656 33.214844 31.957031 32.128906 35.59375 C 30.988281 39.40625 32.460938 43.074219 35.878906 44.9375 C 39.71875 47.03125 45.484375 46.398438 49.648438 41.539062 C 52.210938 38.546875 53.816406 34.929688 54.710938 30.167969 C 55.398438 26.484375 55.238281 23.097656 54.222656 20.097656 C 53.28125 17.308594 51.636719 14.917969 49.328125 12.984375 C 38.449219 3.875 16.542969 8.058594 14.332031 22.242188 C 13.542969 25.949219 13.671875 29.808594 14.714844 33.722656 C 14.546875 34.457031 14.308594 35.394531 14.054688 36.363281 C 11.121094 32.910156 9.957031 27.488281 11.132812 21.90625 Z M 11.132812 21.90625 " />
                      </g>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
