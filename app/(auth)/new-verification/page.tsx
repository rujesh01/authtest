"use client";
import CardWrapper from "@/components/auth/CardWrapper";
import { BeatLoader } from "react-spinners";
import { useParams, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { newVerification } from "@/actions/new-verification";
// import {FormError} from "@/components/for"

const NewVerificationPage = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const searchparams = useSearchParams();

  const token = searchparams.get("token");

  const onSubmit = useCallback(() => {
    // console.log(token)
    if (!token) {
      setError("Missing token");
      return;
    }

    newVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError("Something went wron!");
      });
  }, [token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      title="conform"
      description="Conform your verification"
      footerLInk="/login"
      footerDescription="back to login"
      // showSocial
    >
      <div className="flex items-center w-full justify-center">
        <BeatLoader />
      </div>
    </CardWrapper>
  );
};

export default NewVerificationPage;
