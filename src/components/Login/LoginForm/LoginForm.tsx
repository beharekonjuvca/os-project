import { Icon } from "@components/shared/Icon/Icon";
import { connect } from "formik";
import { useAuthContext } from "../../../context/AuthContext/AuthContext";
import { useLoginFormik } from "./useLoginFormik";

export const LoginForm = () => {
  const authCtx = useAuthContext();
  const { isAuthenticated } = useAuthContext();
  const formik = useLoginFormik({
    onSubmit() {
      authCtx.login();
    },
  });
  console.log(isAuthenticated);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-36 h-36 bg-[#8EE4BA] rounded-full mb-3"> </div>
      <h1 className="text-[#495467] font-bold mb-3">Welcome Borgoth!</h1>

      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col justify-center items-center"
      >
        <div className="mb-3 flex flex-col justify-center items-center ">
          <input
            className="rounded-xl bg-grey border-2 border-solid font-semibold border-[#667489] text-[#667489] placeholder-[#667489] px-2.5  h-6"
            type="password"
            placeholder="Password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password && formik.touched.password && (
            <p className="text-red-600 font-semibold">
              {formik.errors.password}
            </p>
          )}
        </div>

        <button className="flex items-center justify-between " type="submit">
          Unlock {<Icon className="w-4 mx-2" icon="arrow-right" />}
        </button>
      </form>
    </div>
  );
};
