import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { ListRecipeVersionsRequest, ListRecipeVersionsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListRecipeVersionsCommand,
  serializeAws_restJson1ListRecipeVersionsCommand,
} from "../protocols/Aws_restJson1";

export interface ListRecipeVersionsCommandInput extends ListRecipeVersionsRequest {}
export interface ListRecipeVersionsCommandOutput extends ListRecipeVersionsResponse, __MetadataBearer {}

/**
 * <p>Lists the versions of a particular DataBrew recipe, except for
 *                 <code>LATEST_WORKING</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, ListRecipeVersionsCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, ListRecipeVersionsCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new ListRecipeVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRecipeVersionsCommandInput} for command's `input` shape.
 * @see {@link ListRecipeVersionsCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListRecipeVersionsCommand extends $Command<
  ListRecipeVersionsCommandInput,
  ListRecipeVersionsCommandOutput,
  DataBrewClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListRecipeVersionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataBrewClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRecipeVersionsCommandInput, ListRecipeVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataBrewClient";
    const commandName = "ListRecipeVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRecipeVersionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListRecipeVersionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListRecipeVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListRecipeVersionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRecipeVersionsCommandOutput> {
    return deserializeAws_restJson1ListRecipeVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}