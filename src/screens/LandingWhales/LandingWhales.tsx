import { NotificationSection } from "../../components/NotificationSection";
import { TestimonialSection } from "../../components/TestimonialSection";
import { Sidebar } from "../../components/ui/sidebar";
import { WhaleWatchingSection } from "../../components/WhaleWatchingSection";
import { TESTIMONIAL_CONSTANTS } from "../../constants";

export const LandingWhales = (): JSX.Element => {
  const testimonials = TESTIMONIAL_CONSTANTS;

  return (
    <div
      className="relative min-h-screen flex flex-col lg:flex-row"
      style={{
        background:
          "radial-gradient(80% 80% at 20% 80%, rgba(31, 169, 17, 0.81) 10%, rgba(47, 21, 208, 1) 60%, rgba(0,0,0,1) 100%)",
      }}
    >
      {/* Sidebar - appears at top on mobile, right side on desktop */}
      <Sidebar />

      {/* Main content */}
      <div
        className={`flex-grow min-w-0 flex transition-all duration-300 ease-in-out overflow-x-hidden`}
        style={{ border: "2px dashed green" }}
      >
        <div className="min-h-screen flex flex-col pt-32">
          <div className="flex flex-col">
            {/* Notification Feature Section */}
            <NotificationSection />

            {/* Whale Watching Feature Section */}
            <WhaleWatchingSection />

            {/* Testimonials Section */}
            <TestimonialSection testimonials={testimonials} />
          </div>
        </div>
      </div>
    </div>
  );
};
