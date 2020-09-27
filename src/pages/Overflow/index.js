import React from "react";

import Layout from "layout";
import PanelSection from "components/PanelSection";

export default function Overflow() {
  return (
    <Layout>
      <div className="mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
        <div className="flex items-center">
          <h1 className="text-3xl">Overflow</h1>
        </div>
        <PanelSection title="Visible">
          <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
            <div className="overflow-hidden h-24">
              <div className="overflow-visible h-16 bg-gray-400 text-gray-700 p-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                eleifend rutrum auctor. Phasellus convallis sagittis augue ut
                ornare. Vestibulum et gravida lectus, sed ultrices sapien.
                Nullam aliquet elit dui, vitae hendrerit lectus volutpat eget.
                In porttitor tincidunt egestas. Pellentesque laoreet ligula at
                est vulputate facilisis. Etiam tristique justo ut odio placerat
                ornare. Cras bibendum, orci at ornare tincidunt, lacus nunc
                gravida enim, sit amet euismod nunc lectus in lectus. Ut dictum
                nulla et arcu aliquet ornare. Aliquam et dapibus lectus. Aenean
                mattis elit mi, sed ultricies augue consectetur id. Sed id magna
                malesuada, luctus urna a, bibendum tortor. Cras cursus cursus
                ex. Nulla fringilla elit vitae imperdiet scelerisque. Donec ac
                sem eu diam convallis mollis a sed leo. Proin congue augue
                turpis, eget rutrum dolor ultricies non. Nulla blandit venenatis
                dapibus. Sed tincidunt mollis elit, quis suscipit nibh eleifend
                quis. Donec ex lorem, auctor eu rutrum in, blandit id dolor.
                Nulla molestie arcu turpis. In id felis vulputate, tempor massa
                eget, malesuada mauris. Quisque fringilla consequat metus,
                luctus scelerisque leo fringilla vel.
              </div>
            </div>
          </div>
        </PanelSection>
        <PanelSection title="Auto">
          <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
            <div className="overflow-auto h-32 bg-gray-400 text-gray-700 p-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              eleifend rutrum auctor. Phasellus convallis sagittis augue ut
              ornare. Vestibulum et gravida lectus, sed ultrices sapien. Nullam
              aliquet elit dui, vitae hendrerit lectus volutpat eget. In
              porttitor tincidunt egestas. Pellentesque laoreet ligula at est
              vulputate facilisis. Etiam tristique justo ut odio placerat
              ornare. Cras bibendum, orci at ornare tincidunt, lacus nunc
              gravida enim, sit amet euismod nunc lectus in lectus. Ut dictum
              nulla et arcu aliquet ornare. Aliquam et dapibus lectus. Aenean
              mattis elit mi, sed ultricies augue consectetur id. Sed id magna
              malesuada, luctus urna a, bibendum tortor. Cras cursus cursus ex.
              Nulla fringilla elit vitae imperdiet scelerisque. Donec ac sem eu
              diam convallis mollis a sed leo. Proin congue augue turpis, eget
              rutrum dolor ultricies non. Nulla blandit venenatis dapibus. Sed
              tincidunt mollis elit, quis suscipit nibh eleifend quis. Donec ex
              lorem, auctor eu rutrum in, blandit id dolor. Nulla molestie arcu
              turpis. In id felis vulputate, tempor massa eget, malesuada
              mauris. Quisque fringilla consequat metus, luctus scelerisque leo
              fringilla vel.
            </div>
          </div>
        </PanelSection>
        <PanelSection title="Hidden">
          <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
            <div className="overflow-hidden h-32 bg-gray-400 text-gray-700 p-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              eleifend rutrum auctor. Phasellus convallis sagittis augue ut
              ornare. Vestibulum et gravida lectus, sed ultrices sapien. Nullam
              aliquet elit dui, vitae hendrerit lectus volutpat eget. In
              porttitor tincidunt egestas. Pellentesque laoreet ligula at est
              vulputate facilisis. Etiam tristique justo ut odio placerat
              ornare. Cras bibendum, orci at ornare tincidunt, lacus nunc
              gravida enim, sit amet euismod nunc lectus in lectus. Ut dictum
              nulla et arcu aliquet ornare. Aliquam et dapibus lectus. Aenean
              mattis elit mi, sed ultricies augue consectetur id. Sed id magna
              malesuada, luctus urna a, bibendum tortor. Cras cursus cursus ex.
              Nulla fringilla elit vitae imperdiet scelerisque. Donec ac sem eu
              diam convallis mollis a sed leo. Proin congue augue turpis, eget
              rutrum dolor ultricies non. Nulla blandit venenatis dapibus. Sed
              tincidunt mollis elit, quis suscipit nibh eleifend quis. Donec ex
              lorem, auctor eu rutrum in, blandit id dolor. Nulla molestie arcu
              turpis. In id felis vulputate, tempor massa eget, malesuada
              mauris. Quisque fringilla consequat metus, luctus scelerisque leo
              fringilla vel.
            </div>
          </div>
        </PanelSection>
        <PanelSection title="Scroll horizontally if needed">
          <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
            <div className="overflow-x-auto bg-gray-400 text-gray-700 p-2">
              QrLmmW69vMQDtCOg48jidqvvWD2FzDt7I7bBoDc98SRP5OwvOScVYbRzFdfp540eF5v1pjogYkyI8NXqu4wY8chgsXIV0LU7XQKWJ98wLaBSHWiBhvkEU1T3sd6KEFo53CLjVjIz8UvZajb8sbsu62xTsF9cRtFdwEvusq6zJHvedymDCUkY6qXHsuL6fOmHo4KKMurZuJZrK3plRPUaI8XVciz8dVq5CEUXjMrTcB76H1w90CnkRER3nYjs3suTa3223xs8aL97m0peQfjlvKbF8HcmQG5mHEitCn1QZnbMZUK3zE9AIjwcVXP7R9V4fw2A93cZD7wj333X6aaiHZdkkTPtst0u05KSob5c0ZuKQi4D3V395NfFKKr8cR27jmpB7dqK2GiWXeOQUFcjmFVwlHWSlH8ZdUoVJpXf1xL6CRUxwZP4EhBbqQZaJm26ijWII6LRxJ5eVU9Y7KKvQsUeX5BawtgeMWRmjeCwQadTLTQG8gLpi2DvGpMtPWCdqHgEglVSB1ZlDrjEEsXYrNx1IOY0053K3pWNaR1ezyz8kahRfNs3byaHcIQu9tWTrcMpBWhZ45DzLjVV1N8Zt96uLnNWK5DvbKW8GgMuwY7fHkZFz85MN4d2gL0j85HmXGx9oPTFRkPWsmMOHUvm5IhB7QqGSAwT1uL7HgBrNX9a1BAWrp9zV1IWAd1q65sKOOCxTZrXJDpxBxYE4rJAGU6pcri9mUf4g49ZiIAwfu9njtZyYimmImCa6TFhk2jQcSmFDHacExxqC2BfYATHFrKSy94dbw6uWT52nM7MSM9JDu4cs9cbfnaf6amt4hTUotCTONg604b8JKPI1sfd4CG36fBNcnErhpllfRlXkY1xFwmwZT7IJV8okPGNQdTKpdPJOBGw3LHMKojPJl1nPiQB5C9bdePFMNLejSXY5DDvO70ehOCJpBtKZY2quoFJJjGfXe8T4DuGYGmM6JYd5DNinWZuUWXGvfIlJRHgf8BQNQvtmEzqGXIeQZitiq9F
            </div>
          </div>
        </PanelSection>
        <PanelSection title="Scroll vertically if needed">
          <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
            <div className="overflow-y-auto h-32 bg-gray-400 text-gray-700 p-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              eleifend rutrum auctor. Phasellus convallis sagittis augue ut
              ornare. Vestibulum et gravida lectus, sed ultrices sapien. Nullam
              aliquet elit dui, vitae hendrerit lectus volutpat eget. In
              porttitor tincidunt egestas. Pellentesque laoreet ligula at est
              vulputate facilisis. Etiam tristique justo ut odio placerat
              ornare. Cras bibendum, orci at ornare tincidunt, lacus nunc
              gravida enim, sit amet euismod nunc lectus in lectus. Ut dictum
              nulla et arcu aliquet ornare. Aliquam et dapibus lectus. Aenean
              mattis elit mi, sed ultricies augue consectetur id. Sed id magna
              malesuada, luctus urna a, bibendum tortor. Cras cursus cursus ex.
              Nulla fringilla elit vitae imperdiet scelerisque. Donec ac sem eu
              diam convallis mollis a sed leo. Proin congue augue turpis, eget
              rutrum dolor ultricies non. Nulla blandit venenatis dapibus. Sed
              tincidunt mollis elit, quis suscipit nibh eleifend quis. Donec ex
              lorem, auctor eu rutrum in, blandit id dolor. Nulla molestie arcu
              turpis. In id felis vulputate, tempor massa eget, malesuada
              mauris. Quisque fringilla consequat metus, luctus scelerisque leo
              fringilla vel.
            </div>
          </div>
        </PanelSection>
        <PanelSection title="Scroll horizontally always">
          <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
            <div className="overflow-x-scroll bg-gray-400 text-gray-700 p-2">
              QrLmmW69vMQDtCOg48jidqvvWD2FzDt7I7bBoDc98SRP5OwvOScVYbRzFdfp540eF5v1pjogYkyI8NXqu4wY8chgsXIV0LU7XQKWJ98wLaBSHWiBhvkEU1T3sd6KEFo53CLjVjIz8UvZajb8sbsu62xTsF9cRtFdwEvusq6zJHvedymDCUkY6qXHsuL6fOmHo4KKMurZuJZrK3plRPUaI8XVciz8dVq5CEUXjMrTcB76H1w90CnkRER3nYjs3suTa3223xs8aL97m0peQfjlvKbF8HcmQG5mHEitCn1QZnbMZUK3zE9AIjwcVXP7R9V4fw2A93cZD7wj333X6aaiHZdkkTPtst0u05KSob5c0ZuKQi4D3V395NfFKKr8cR27jmpB7dqK2GiWXeOQUFcjmFVwlHWSlH8ZdUoVJpXf1xL6CRUxwZP4EhBbqQZaJm26ijWII6LRxJ5eVU9Y7KKvQsUeX5BawtgeMWRmjeCwQadTLTQG8gLpi2DvGpMtPWCdqHgEglVSB1ZlDrjEEsXYrNx1IOY0053K3pWNaR1ezyz8kahRfNs3byaHcIQu9tWTrcMpBWhZ45DzLjVV1N8Zt96uLnNWK5DvbKW8GgMuwY7fHkZFz85MN4d2gL0j85HmXGx9oPTFRkPWsmMOHUvm5IhB7QqGSAwT1uL7HgBrNX9a1BAWrp9zV1IWAd1q65sKOOCxTZrXJDpxBxYE4rJAGU6pcri9mUf4g49ZiIAwfu9njtZyYimmImCa6TFhk2jQcSmFDHacExxqC2BfYATHFrKSy94dbw6uWT52nM7MSM9JDu4cs9cbfnaf6amt4hTUotCTONg604b8JKPI1sfd4CG36fBNcnErhpllfRlXkY1xFwmwZT7IJV8okPGNQdTKpdPJOBGw3LHMKojPJl1nPiQB5C9bdePFMNLejSXY5DDvO70ehOCJpBtKZY2quoFJJjGfXe8T4DuGYGmM6JYd5DNinWZuUWXGvfIlJRHgf8BQNQvtmEzqGXIeQZitiq9F
            </div>
          </div>
        </PanelSection>
        <PanelSection title="Scroll vertically always">
          <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
            <div className="overflow-y-scroll h-32 bg-gray-400 text-gray-700 p-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              eleifend rutrum auctor. Phasellus convallis sagittis augue ut
              ornare. Vestibulum et gravida lectus, sed ultrices sapien. Nullam
              aliquet elit dui, vitae hendrerit lectus volutpat eget. In
              porttitor tincidunt egestas. Pellentesque laoreet ligula at est
              vulputate facilisis. Etiam tristique justo ut odio placerat
              ornare. Cras bibendum, orci at ornare tincidunt, lacus nunc
              gravida enim, sit amet euismod nunc lectus in lectus. Ut dictum
              nulla et arcu aliquet ornare. Aliquam et dapibus lectus. Aenean
              mattis elit mi, sed ultricies augue consectetur id. Sed id magna
              malesuada, luctus urna a, bibendum tortor. Cras cursus cursus ex.
              Nulla fringilla elit vitae imperdiet scelerisque. Donec ac sem eu
              diam convallis mollis a sed leo. Proin congue augue turpis, eget
              rutrum dolor ultricies non. Nulla blandit venenatis dapibus. Sed
              tincidunt mollis elit, quis suscipit nibh eleifend quis. Donec ex
              lorem, auctor eu rutrum in, blandit id dolor. Nulla molestie arcu
              turpis. In id felis vulputate, tempor massa eget, malesuada
              mauris. Quisque fringilla consequat metus, luctus scelerisque leo
              fringilla vel.
            </div>
          </div>
        </PanelSection>
      </div>
    </Layout>
  );
}
