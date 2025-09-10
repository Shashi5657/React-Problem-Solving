import { useForm } from "@tanstack/react-form";
import "./App.css";

type ContactFormValues = {
  name: string;
  email: string;
};

function App() {
  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
    },
    validators: {
      name: {
        required: "Name is required",
        minLength: {
          value: 3,
          message: "Name must be at least 3 characters long",
        },
      },
      email: {
        required: "Email is required",
        pattern: {
          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          message: "Invalid email address",
        },
      },
    },
    onSubmit: ({ value }) => {
      console.log("Form submitted:", value);
    },
  });

  return (
    <form onSubmit={form.handleSubmit}>
      <form.Field
        name="email"
        validators={{
          // We can choose between form-wide and field-specific validators
          onChange: ({ value }) =>
            value.length > 3 ? undefined : "Must be 3 characters long",
        }}
        children={(field) => (
          <>
            <input
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              type="email"
              onChange={(e) => field.handleChange(e.target.value)}
            />
            {!field.state.meta.isValid && (
              <em>{field.state.meta.errors.join(",")}</em>
            )}
          </>
        )}
      />
      <form.Field
        name="email"
        validators={{
          // We can choose between form-wide and field-specific validators
          onChange: ({ value }) =>
            value.length > 3 ? undefined : "Must be 3 characters long",
        }}
        children={(field) => (
          <>
            <input
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              type="email"
              onChange={(e) => field.handleChange(e.target.value)}
            />
            {!field.state.meta.isValid && (
              <em>{field.state.meta.errors.join(",")}</em>
            )}
          </>
        )}
      />
    </form>
  );
}

export default App;
