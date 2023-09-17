import PriceOption from "../priceOption/PriceOption";

const PriceOptions = () => {
  const gymMembershipPrices = [
    {
      id: 1,
      name: "Basic Membership",
      description: "Access to cardio and weightlifting areas",
      price: 29.99,
      duration: "per month",
      features: [
        "Unlimited access to gym equipment",
        "Locker room access",
        "Fitness assessment",
      ],
    },
    {
      id: 2,
      name: "Premium Membership",
      description: "Access to all gym facilities and classes",
      price: 49.99,
      duration: "per month",
      features: [
        "Access to all equipment and classes",
        "Personal training sessions",
        "Nutritional guidance",
        "Sauna and spa access",
      ],
    },
    {
      id: 3,
      name: "Student Membership",
      description: "Discounted membership for students",
      price: 19.99,
      duration: "per month",
      features: [
        "Access to cardio and weightlifting areas",
        "Locker room access",
        "Valid student ID required",
      ],
    },
    {
      id: 4,
      name: "Family Membership",
      description: "Membership for the whole family",
      price: 89.99,
      duration: "per month",
      features: [
        "Access for two adults and two children",
        "Access to all gym facilities",
        "Childcare services",
      ],
    },
    {
      id: 5,
      name: "Platinum Membership",
      description: "All-inclusive membership with premium features",
      price: 99.99,
      duration: "per month",
      features: [
        "Access to all equipment, classes, and amenities",
        "Unlimited personal training sessions",
        "Customized nutrition plans",
        "VIP lounge access",
        "Complimentary spa treatments",
        "Priority class reservations",
      ],
    },
  ];

  return (
    <div>
      <h3 className="text-6xl">Best prices in the town</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mx-5 p-6">
        {gymMembershipPrices.map((option) => (
          <PriceOption
            key={gymMembershipPrices.id}
            option={option}
          ></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
